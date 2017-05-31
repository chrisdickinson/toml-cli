# toml-cli

A CLI script to turn TOML into JSON.

`$ npm i -g toml-cli`

Tastes great when used with the [json] package.

```bash
$ cat /path/to/toml
[environment]
  hello = "world"
$ toml < path-to-toml | json environment.hello
world
```

# license

MIT
