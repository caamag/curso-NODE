Antes de qualquer coisa criar a nova tabela Vendas no pgAdmin;

Criar container:
    docker pull postgres
    docker run --name new-postgres -e POSTGRES_PASSWORD=familia007 -p 5432:5432 -d postgres;
    fe182e7af7a7833933a6ba92a198359da7e40035380c447561b0eb45b09d3243;

prisma: 
    npx prisma generate --schema schema/schema.prisma;
    npx prisma migrate dev --schema schema/schema.prisma

