# SQL (Structured Query Language)

SQL is a programming language used to interact with **Relational Databases**.

In SQL, there can be multiple tables with different data in a database as you can see below, all the tables are in a single database which have details of employee, department, folder and country-
![Table Stucture](https://graphql-engine-cdn.hasura.io/learn-hasura/assets/database-mssql/er-diagram/ER-diagram.png)

<br>

# Table in SQL

<table>
    <tr text-align="center">
        <th colspan="5">User</th>
    </tr>
    <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Email</th>
        <th>Followers</th>
        <th>Following</th>
    </tr>
    <tr>
        <td>1</td>
        <td>Adam</td>
        <td>adam@yahoo.in</td>
        <td>123</td>
        <td>145</td>
    </tr>
    <tr>
        <td>2</td>
        <td>Bob</td>
        <td>bob123@gmail.com</td>
        <td>200</td>
        <td>200</td>
    </tr>
    <tr>
        <td>3</td>
        <td>Casey</td>
        <td>casey@gmail.com</td>
        <td>200</td>
        <td>206</td>
    </tr>
    <tr>
        <td>4</td>
        <td>Donald</td>
        <td>donald@gmail.com</td>
        <td>200</td>
        <td>105</td>
    </tr>
</table>

Colums are the structure for the table which is also the **schema** for the table
[Id, Name, Email, Followers, Following]

Rows are the **tuple** for the table.
**Tuple** means a single row in the table

### Prerequisites for SQL
* MySQL Server
* MySQL Workbench
* Installation Link- [MySQL](https://www.mysql.com/downloads/)