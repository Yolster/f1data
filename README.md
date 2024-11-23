
# Formula 1 Data (Discord Bot)

This Discord bot is created with discord.js (I forgot the version of discord.js). The bot gets api from https://api-sports.io/ . You must register there (We do not have any partnerships, I recommend it because it is completely useful.). You need fill out the config.js. If you want to bot what 
## API Reference

#### Get all items

```http
  GET /api/items
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `rapidkey` | `string` | **Required**. Your API key |

You should use on `config.js`


## Commands

#### Command

```
  {prefix}parameter [variable]
```

| Parameter | Type     | Description                | Variables |
| :-------- | :------- | :------------------------- | :---------- |
| `help` | `string` | You can get commands and open-source link | None |
| `botinfo` | `string` | You get bots stats like server or cpu usage | None |
| `circuits` | `string` | You can get a circuits information  | Circuit name |
| `driver-ranks` | `string` | You get drivers rank | Season |
| `driverinfo` | `string` | You get driver info | Driver-Name |
| `team-ranks` | `string` | You get teams rank | Season |
| `teaminfo` | `string` | You get team info | Team-Name |


You should use on `config.js`


## Authors

- [@yolster](https://www.github.com/Yolster)


## Running Tests

To run tests, run the following command

```bash
  node index.js
```


## Tech Stack
**Server:** Node


## Badges

[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://opensource.org/license/gpl-3-0)

[![Build Pass](https://img.shields.io/badge/build-passing-brightgreen)]()

[![Javascript](https://shields.io/badge/JavaScript-F7DF1E?logo=JavaScript&logoColor=000&style=flat-square)]()
