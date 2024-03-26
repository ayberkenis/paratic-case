## Paratic Case

RSS Interactive tarafından istenen case için hazırlanan proje de kullandığım tech stack ve nedenleri aşağıda detaylıca açıklanmıştır.

### Frontend

- [Next.js 14.1.4](https://www.npmjs.com/package/next)
- [Tailwind.css 3.4.1](https://tailwindcss.com/)

### Backend

- [Express 4.19.2](https://www.npmjs.com/package/express)

- [Node v.20.11.1 LTS](https://nodejs.org/en)

- [MySQL 8.0.33](https://dev.mysql.com/doc/relnotes/mysql/8.0/en/news-8-0-33.html)

#### Neden Express?

> Laravel yerine Express kullanma sebebim, aslında projenin SPA olup load olarak çok yükünün bulunmaması. Laravel, ağır yük gerektiren web app'ler için uygun olsa da bir case için kullanılmasına gerek olduğunu düşünmüyorum. Çünkü Laravel, ORM, Routing gibi bu proje de kullanmayacağımız bir çok ek özellik içeriyor ve bu performans anlamında sorun yaratabiliyor. Daha büyük çaplı, ya da microservice mimari ile bir backend yazacak olsaydık Laravel doğru bir seçim olabilirdi ancak bu case için Express'in lightweight olması performans ve developer experience anlamında çok daha işimize yarayacaktır.

#### Neden MySQL?

> MySQL, 2024 yılında hala en çok kullanılan database. Express'i seçme sebebimle birebir aynı sebepten, tamamen performansı gözeterek, MySQL bu performansı verebilecek en iyi seçenekti. PostgreSQL de güçlü bir adaydı ama hız konusunda etki yaratacak bir fark olmaması ve MySQL ile deployment'ı daha kolay halledebilecek olmamız sebebiyle seçimimi MySQL'den yana kullandım.

### SQL Schema

#### Users Table

| Column Name         | Data Type    | Description                                     |
| ------------------- | ------------ | ----------------------------------------------- |
| id                  | INT          | Primary key, auto-incremented                   |
| username            | VARCHAR(50)  | User's username                                 |
| avatar              | VARCHAR(100) | URL to user's avatar image                      |
| last_online         | DATETIME     | Date and time of user's last online activity    |
| last_comment        | INT          | ID of the user's last comment                   |
| password            | VARCHAR(100) | User's password (hashed)                        |
| email               | VARCHAR(100) | User's email address                            |
| email_verified      | BOOLEAN      | Flag indicating if the user's email is verified |
| register_timestamp  | TIMESTAMP    | Timestamp of user registration                  |
| login_timestamp     | TIMESTAMP    | Timestamp of user's last login                  |
| update_timestamp    | TIMESTAMP    | Timestamp of last user profile update           |
| commented_timestamp | TIMESTAMP    | Timestamp of user's last comment                |

### Threads Table

| Column Name | Data Type    | Description                                  |
| ----------- | ------------ | -------------------------------------------- |
| id          | INT          | Primary key, auto-incremented                |
| title       | VARCHAR(255) | Title of the thread                          |
| author_id   | INT          | Foreign key referencing the author's user ID |
| created_at  | TIMESTAMP    | Timestamp of thread creation                 |

### Comments Table

| Column Name  | Data Type | Description                                  |
| ------------ | --------- | -------------------------------------------- |
| id           | INT       | Primary key, auto-incremented                |
| content      | TEXT      | Content of the comment                       |
| thread_id    | INT       | Foreign key referencing the thread ID        |
| author_id    | INT       | Foreign key referencing the author's user ID |
| commented_at | DATETIME  | Timestamp of when the comment was made       |
| timestamp    | TIMESTAMP | Timestamp of comment creation                |
