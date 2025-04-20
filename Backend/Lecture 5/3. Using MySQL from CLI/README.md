# MySQL Package 

## Types to execute SQL 

* Using Workbench
* MySQL Package - Node.js
* CLI
* Using SQL files

## MySQL from the CLI/Bash

You can use the MySQL from the CLI/Bash of your system. 

Just by simply navigate to the bin of the MySQL first-

```bash
cd "C:\Program Files\MySQL\MySQL Server 8.0\bin"
```

and then `run` this-

```bash
./mysql -u root -p
```

**Show All Databases**

```bash
echo "SHOW DATABASES;" | mysql -u root -p
```

**Use a Specific Database**

```bash
echo "USE database_name;" | mysql -u root -p
```

**Run an SQL Query**

```bash
echo "SELECT * FROM table_name;" | mysql -u root -p database_name
```

**Import a `.sql` File (Database Backup)**

```bash
mysql -u root -p database_name < backup.sql
```

**Export a Database to a `.sql` File**

```bash
mysqldump -u root -p database_name > backup.sql
```

**Start and Stop MySQL Service**

```bash
net start MySQL80   # Start MySQL
net stop MySQL80    # Stop MySQL
```

**Exit MySQL**

```bash
exit
```