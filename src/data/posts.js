// Block types: p, h2, ul (items), code (lang, code), callout
// Starter posts: edit them, or replace them with your own.
const posts = [
  {
    slug: "how-i-became-a-software-engineer",
    title: "How I became a software engineer",
    excerpt:
      "From Laravel apps in 2020 to enterprise microservices today: the path, what I learned, and what I'd tell someone starting out.",
    date: "2026-06-10",
    tags: ["Story", "Career"],
    content: [
      { type: "p", text: "This is a short version of how I got here. Edit it with your own memories, turning points and photos, because this is the post people read to get to know you." },
      { type: "h2", text: "Starting with Laravel" },
      { type: "p", text: "In March 2020 I joined eSign Technology as a Laravel developer. I built web applications in PHP with MySQL, worked on IoE solutions and news portals, and learned the basics of shipping real software: JavaScript, jQuery, AJAX and responsive CSS with Bootstrap." },
      { type: "h2", text: "Moving to .NET and React" },
      { type: "p", text: "In December 2021, shortly after finishing my Bachelor in Computer Engineering at Purwanchal Campus, I joined Professional Computer System as a trainee. That is where I met .NET Core, PostgreSQL, React, Next.js, microservices, Kafka and Docker, all on a real project called CBMS, alongside senior engineers." },
      { type: "h2", text: "Software engineer" },
      { type: "p", text: "Since June 2022 I've been a Software Engineer there, working on backend services, frontends and the messaging between them, and contributing to TU EMIS as well." },
      { type: "h2", text: "What I'd tell someone starting out" },
      { type: "ul", items: [
        "Fundamentals transfer. Moving from PHP to .NET felt big, but HTTP, SQL and clean structure came with me.",
        "Read production code. Working next to experienced engineers taught me more than any tutorial.",
        "Explain trade-offs in plain language. It is half of the job.",
        "Stay curious outside the screen too. Sports and travel keep me fresh.",
      ] },
    ],
  },
  {
    slug: "kafka-between-dotnet-microservices",
    title: "Kafka between microservices: five things to get right",
    excerpt:
      "Idempotent consumers, message keys, offset commits, the outbox pattern and dead-letter topics: the practical checklist for services that talk through Kafka.",
    date: "2026-09-15",
    tags: ["Kafka", ".NET", "Microservices"],
    content: [
      { type: "p", text: "Kafka makes it easy to decouple services, and just as easy to build a system that fails in confusing ways. These are the five things that matter most when one .NET service publishes events that another service depends on." },
      { type: "h2", text: "1. Assume every message can arrive twice" },
      { type: "p", text: "With retries, Kafka delivers at least once. A consumer that crashes after doing the work but before committing its offset will see the same message again. Make handlers idempotent: store the event id, and skip anything you have already processed." },
      {
        type: "code",
        lang: "csharp",
        code: `var config = new ConsumerConfig
{
    BootstrapServers = "localhost:9092",
    GroupId = "returns-processor",
    EnableAutoCommit = false,
    AutoOffsetReset = AutoOffsetReset.Earliest
};

using var consumer = new ConsumerBuilder<string, string>(config).Build();
consumer.Subscribe("return.submitted");

while (!ct.IsCancellationRequested)
{
    var result = consumer.Consume(ct);

    if (!await store.HasProcessedAsync(result.Message.Key, ct))
    {
        await handler.HandleAsync(result.Message.Value, ct);
        await store.MarkProcessedAsync(result.Message.Key, ct);
    }

    consumer.Commit(result); // commit only after the work succeeded
}`,
      },
      { type: "h2", text: "2. Choose the key on purpose" },
      { type: "p", text: "Ordering is only guaranteed within a partition, and the message key decides the partition. Key by the aggregate id, such as an order id, so every event for one entity is processed in order. A null or random key spreads load evenly but gives up ordering." },
      { type: "h2", text: "3. Commit after the work, not before" },
      { type: "p", text: "Turn off auto-commit for handlers that write to a database, and commit only once the write has succeeded. The trade-off is possible reprocessing, which is exactly why the first point matters." },
      { type: "h2", text: "4. Use an outbox when a database write and an event must agree" },
      { type: "p", text: "Saving to PostgreSQL and publishing to Kafka are two separate operations, and one can succeed while the other fails. Write the event to an outbox table in the same transaction as the business change, then let a background worker publish it. The worker may publish duplicates, which brings you back to idempotent consumers." },
      { type: "h2", text: "5. Give failures somewhere to go" },
      { type: "p", text: "One malformed message should not block a partition forever. Retry transient errors a limited number of times with backoff, then move the message to a dead-letter topic with the error attached, and alert on it." },
      { type: "callout", text: "Checklist: idempotent handlers, keys chosen per aggregate, manual commits after success, an outbox for dual writes, and a dead-letter topic with alerting." },
    ],
  },
  {
    slug: "dapper-and-ef-core",
    title: "Dapper or EF Core? Use both, with a clear split",
    excerpt:
      "A simple rule for choosing between an ORM and a micro-ORM in the same .NET codebase: EF Core for writes, Dapper for reads that need speed.",
    date: "2026-08-20",
    tags: [".NET", "Databases", "Performance"],
    content: [
      { type: "p", text: "The Dapper versus EF Core debate usually assumes you must pick one. In a real application you rarely have to. They solve different problems, and a clear split keeps the codebase consistent." },
      { type: "h2", text: "EF Core for writes and domain logic" },
      { type: "p", text: "Change tracking, migrations and relationships are what EF Core is good at. When you load an aggregate, change it and save it, the ORM removes a lot of boilerplate and keeps the model and the schema in sync." },
      { type: "h2", text: "Dapper for reads, reports and hot paths" },
      { type: "p", text: "Read endpoints rarely need tracked entities. They need exactly the columns the screen shows, from a query you can read and tune. Dapper maps the result of hand-written SQL straight to a plain type, which makes the query plan obvious and the allocations small." },
      {
        type: "code",
        lang: "csharp",
        code: `const string sql = """
    SELECT o.id, o.status, c.name AS customer
    FROM orders o
    JOIN customers c ON c.id = o.customer_id
    WHERE o.created_at >= @since
    ORDER BY o.created_at DESC
    LIMIT @take;
    """;

var rows = await connection.QueryAsync<OrderRow>(sql, new { since, take });`,
      },
      { type: "h2", text: "A rule of thumb" },
      { type: "ul", items: [
        "If the code changes data and enforces business rules, use EF Core.",
        "If the code only reads data for a screen or report, use Dapper.",
        "Measure before optimizing: look at the generated SQL and the execution plan first.",
        "Always use parameters. Never build SQL by concatenating user input.",
      ] },
      { type: "p", text: "This split also fits CQRS naturally: the command side uses the ORM, the query side uses hand-tuned SQL, and each can be changed independently." },
    ],
  },
  {
    slug: "jwt-authentication-aspnet-core",
    title: "JWT authentication in ASP.NET Core without the common mistakes",
    excerpt:
      "Validate issuer, audience and lifetime, keep access tokens short, and rotate refresh tokens. A compact setup you can trust.",
    date: "2026-07-28",
    tags: ["Security", ".NET", "Authentication"],
    content: [
      { type: "p", text: "JWT bearer authentication takes a few lines to switch on, which is why it is often configured once and never reviewed. Most problems come from validation that was left off or lifetimes that were left long." },
      { type: "h2", text: "Validate everything the token claims" },
      { type: "p", text: "Check the issuer, the audience, the lifetime and the signature. If any of these is disabled, a token issued for another service or an expired token can be accepted." },
      {
        type: "code",
        lang: "csharp",
        code: `builder.Services
    .AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuer = true,
            ValidIssuer = config["Jwt:Issuer"],
            ValidateAudience = true,
            ValidAudience = config["Jwt:Audience"],
            ValidateLifetime = true,
            ValidateIssuerSigningKey = true,
            IssuerSigningKey = new SymmetricSecurityKey(
                Encoding.UTF8.GetBytes(config["Jwt:Key"]!)),
            ClockSkew = TimeSpan.FromSeconds(30)
        };
    });`,
      },
      { type: "h2", text: "Keep access tokens short-lived" },
      { type: "p", text: "A JWT cannot be revoked once it is issued, so a short lifetime (minutes, not days) limits the damage if one leaks. Pair it with a refresh token to keep users signed in." },
      { type: "h2", text: "Rotate refresh tokens" },
      { type: "p", text: "Store refresh tokens server-side, issue a new one every time it is used, and invalidate the old one. If an already-used refresh token shows up again, treat it as theft and revoke the whole session." },
      { type: "h2", text: "Protect the secrets" },
      { type: "ul", items: [
        "Keep signing keys in a secret store or environment variables, never in source control.",
        "Use a key long enough for the algorithm, and plan for key rotation.",
        "For multiple services, prefer asymmetric keys so only the identity provider can sign tokens.",
        "Serve everything over HTTPS and set cookie flags (HttpOnly, Secure, SameSite) if tokens live in cookies.",
      ] },
      { type: "callout", text: "For more than one client or service, consider OAuth2 / OpenID Connect with a proper identity provider instead of hand-rolling token issuance." },
    ],
  },
];

export default posts;
