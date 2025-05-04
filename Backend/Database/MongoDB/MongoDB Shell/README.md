# MongoDB

Opening mongodb shell enter `mongosh` in powershell/bash.

If Bash shows 
```bash
bash: mongosh: command not found
```
then you need to set alias on your bash.

<br>

For setting up thew alias, follow the steps below-

### Option 1 
You go to the path where mongodb shell is installed and then enter 
```bash
mongosh 
``` 
in the terminal/bash.

### Option 2
1. Open Git Bash
2. Run: 
   ```bash
   nano ~/.bashrc
   ```
3. Add this line at the bottom:
   ```bash
   alias mongosh='"/c/Program Files/mongosh/mongosh.exe"'
   ```
4. Save and exit (`Ctrl + O`, `Enter`, `Ctrl + X`)
5. Reload your .bashrc:
   ```bash
   source ~/.bashrc
   ```
6. Now just type:
   ```bash
   mongosh
   ```

