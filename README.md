# symlinkme

`symlinkme` is a command-line tool that makes it easy to create symbolic links in your project directory. With `symlinkme`, you can quickly and easily create links between files and directories, which can be useful for sharing files between different projects or linking to common files.

## Installation

To use `symlinkme`, you must have Node.js and npm installed on your system. You can then install `symlinkme` using npm:

npm install -g symlinkme

## Usage

To create a symbolic link using `symlinkme`, simply navigate to the directory where you want to create the link and run the following command:

symlinkme <target> <link>

Where `<target>` is the file or directory you want to link to, and `<link>` is the name of the link you want to create. For example, to link the `.env` file in the root directory to a new file named `.env` in the `hello` directory, run the following command:

symlinkme .env hello/.env

This will create a new symbolic link named `.env` in the `hello` directory that points to the `.env` file in the root directory.

## Options

TODO: Add options, (force, version)

## License

`symlinkme` is open source software released under the [MIT license](https://opensource.org/licenses/MIT).

## Contributing

If you'd like to contribute to `symlinkme`, feel free to submit a pull request or open an issue on the [GitHub repository](https://github.com/kingdevnl/symlinkme). We welcome contributions of all kinds, including bug reports, feature requests, documentation improvements, and code changes.
