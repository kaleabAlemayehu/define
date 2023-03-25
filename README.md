# Define

_Define_ is the command line tool i use on my machine as a dictionary, it is inspired by _Google's_ define search ( if you notice when you search on google with the word _\"define\"_ comes before any word you want, you do get the definition of that word ).
as i use linux as my daily drive , i use alias on the .bashrc file to call the command define and use it on my daily basics.

## Prerequisites

- [Node.js](https://nodejs.org/).
- [Git](https://git-scm.com/).
- [Marriam-Webster Dictionary API](https://dictionaryapi.com/) get your own API Key.
- Linux ( only if you want use this tool by following this doc, however can change use alias on your corresponding OS ).

## Installation

### clone the repo

if you have https auth on github

```bash
git clone https://github.com/kaleabAlemayehu/define.git
```

if you have ssh auth on github

```bash
git clone git@github.com:kaleabAlemayehu/define.git
```

### Initilize the project

```bash
npm i

```

### configure your own API key

1. create a file called _.env_
1. store your API key in the following format

```bash
DIC=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
THE=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
```

3. store the command on your terminal alias

```bash
alias define='node /project's absolute path'
```

## Usage

there are 2 parameters when you the tool, those are the word you want the definition and the number of word type you want, it depend on the word you choose wheather the word type become noun, adjective, verb, adverb. but if you want the word type more than one. you can pass it as parameter in the command like this

```bash
define peach 4
```

- the first parameter is the word.
- how many definition you want about the word.
