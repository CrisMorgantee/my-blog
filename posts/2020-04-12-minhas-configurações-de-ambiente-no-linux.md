---
title: 'Minhas Configurações de Ambiente no Linux '
description: 'Settings, Plugins e Shortcuts do VsCode, .zshrc e .hyper.js '
date: '2020-04-12 12:06:23'
thumbnail: /assets/img/settings.webp
category: dev
background: '#637a91'
---
## Configurando o Visual Studio Code


**`settings.json`**
```js
{
  "breadcrumbs.enabled": true,
  "[css]": {
    "editor.fontLigatures": false
  },
  "debug.console.fontFamily": "default",
  "discord.enable": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.organizeImports": true
  },
  "editor.cursorStyle": "block",
  "editor.cursorWidth": 2,
  "editor.fontSize": 16,
  "editor.fontFamily": "'Fira Code Retina'",
  "editor.fontLigatures": true,
  "editor.formatOnSave": true,
  "editor.formatOnPaste": true,
  "editor.lineHeight": 24,
  "editor.parameterHints.enabled": false,
  "editor.renderLineHighlight": "gutter",
  "editor.renderIndentGuides": false,
  "editor.rulers": [80, 120],
  "editor.tabSize": 2,
  "editor.wordWrap": "on",
  "emmet.includeLanguages": {
    "javascript": "javascriptreact"
  },
  "emmet.syntaxProfiles": {
    "javascript": "jsx"
  },
  "eslint.alwaysShowStatus": true,
  "eslint.format.enable": true,
  "eslint.enable": true,
  "explorer.confirmDragAndDrop": false,
  "explorer.confirmDelete": false,
  "explorer.compactFolders": false,
  "extensions.ignoreRecommendations": true,
  "files.autoSave": "off",
  "files.associations": {
    ".babelrc": "json5",
    "*.html": "html",
    "*.js": "javascript"
  },
  "files.insertFinalNewline": true,
  "files.watcherExclude": {
    "**/.git/objects/**": true,
    "**/.git/subtree-cache/**": true,
    "**/node_modules/*/**": true
  },
  "gitlens.codeLens.recentChange.enabled": false,
  "gitlens.codeLens.authors.enabled": false,
  "gitlens.codeLens.enabled": false,
  "git.enableSmartCommit": true,
  "[html]": {
    "editor.defaultFormatter": "vscode.html-language-features"
  },
  "javascript.format.enable": true,
  "javascript.format.semicolons": "remove",
  "javascript.implicitProjectConfig.experimentalDecorators": true,
  "javascript.validate.enable": true,
  "liveshare.featureSet": "insiders",
  "liveServer.settings.donotShowInfoMsg": true,
  "prettier.useEditorConfig": true,
  // "prettier.bracketSpacing": false,
  // "prettier.semi": true,
  // "prettier.requireConfig": true,
  // "prettier.singleQuote": true,
  // "prettier.jsxSingleQuote": true,
  // "prettier.htmlWhitespaceSensitivity": "ignore",
  // "prettier.printWidth": 100,
  "terminal.integrated.fontFamily": "'Fira Code'",
  "terminal.integrated.fontSize": 16,
  "terminal.integrated.fontWeightBold": "500",
  "terminal.integrated.letterSpacing": 0.6,
  "terminal.integrated.lineHeight": 1.05,
  "terminal.integrated.shell.linux": "/usr/bin/zsh",
  "terminal.integrated.shell.osx": "/bin/zsh",
  "window.menuBarVisibility": "toggle",
  "window.zoomLevel": 0,
  "workbench.activityBar.visible": false,
  "workbench.colorTheme": "Dracula",
  "workbench.editor.labelFormat": "short",
  "workbench.iconTheme": "material-icon-theme",
  "workbench.colorCustomizations": {
    "window.activeBorder": "#04d361",
    "window.inactiveBorder": "#eee"
  },
  "workbench.statusBar.visible": true,
  "workbench.startupEditor": "newUntitledFile",
  "editor.suggestSelection": "first",
  "vsintellicode.modify.editor.suggestSelection": "automaticallyOverrodeDefaultValue",
  "javascript.updateImportsOnFileMove.enabled": "never",
  "files.exclude": {
    "**/.classpath": true,
    "**/.project": true,
    "**/.settings": true,
    "**/.factorypath": true
  },
  "workbench.sideBar.location": "left"
}

```

**`plugins`**

- [Auto Close Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag)
- [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)
- [Bracket Pair Colorizer](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer)
- [Colorize](https://marketplace.visualstudio.com/items?itemName=kamikillerto.vscode-colorize)
- [Create Files & Folders:On The Go](https://marketplace.visualstudio.com/items?itemName=ritwickdey.create-file-folder)
- [Discord Presence](https://marketplace.visualstudio.com/items?itemName=icrawl.discord-vscode)
- [DotEnv](https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv)
- [Dracula Oficial](https://marketplace.visualstudio.com/items?itemName=dracula-theme.theme-dracula)
- [Edge Template Suport](https://marketplace.visualstudio.com/items?itemName=luongnd.edge)
- [EditorConfig for Vs Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
- [ES7 React/Redux/GraphQl/ReactNative Snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Figma](https://marketplace.visualstudio.com/items?itemName=idered.figma)
- [GraphQl](https://marketplace.visualstudio.com/items?itemName=Prisma.vscode-graphql)
- [Guides](https://marketplace.visualstudio.com/items?itemName=spywhere.guides)
- [Highlight Matching Tag](https://marketplace.visualstudio.com/items?itemName=vincaslt.highlight-matching-tag)
- [Intellisense for CSS clas names in HTML](https://marketplace.visualstudio.com/items?itemName=Zignd.html-css-class-completion)
- [Java Dependency Viewer](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-dependency)
- [Java Extension Pack](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-pack)
- [Java Test Runner](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-test)
- [Javascript Console Utils](https://marketplace.visualstudio.com/items?itemName=whtouche.vscode-js-console-utils)
- [Language Support for Java(TM) by Red Hat](https://marketplace.visualstudio.com/items?itemName=redhat.java)
- [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
- [Live Share](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare)
- [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)
- [Maven For Java](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-maven)
- [Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense)
- [Prettier - Code Formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Simple React Snippets](https://marketplace.visualstudio.com/items?itemName=burkeholland.simple-react-snippets)
- [Styled Components Snippets](https://marketplace.visualstudio.com/items?itemName=jonkwheeler.styled-components-snippets)
- [Visual Studio IntelliCode](https://marketplace.visualstudio.com/items?itemName=VisualStudioExptTeam.vscodeintellicode)
- [VsCode Discord](https://marketplace.visualstudio.com/items?itemName=maxerbox.vscode-discord)
- [VsCode Styled Components](https://marketplace.visualstudio.com/items?itemName=jpoissonnier.vscode-styled-components)

**`shortcuts`**  

```js
// Place your key bindings in this file to override the defaultsauto[]
[
  {
    key: "ctrl+alt+right",
    command: "editor.emmet.action.nextEditPoint"
  },
  {
    key: "ctrl+alt+left",
    command: "editor.emmet.action.prevEditPoint"
  },
  {
    key: "ctrl+alt+down",
    command: "editor.action.copyLinesDownAction",
    when: "editorTextFocus && !editorReadonly"
  },
  {
    key: "ctrl+shift+alt+down",
    command: "-editor.action.copyLinesDownAction",
    when: "editorTextFocus && !editorReadonly"
  },
  {
    key: "ctrl+alt+up",
    command: "editor.action.copyLinesUpAction",
    when: "editorTextFocus && !editorReadonly"
  },
  {
    key: "ctrl+shift+alt+up",
    command: "-editor.action.copyLinesUpAction",
    when: "editorTextFocus && !editorReadonly"
  }
];
```
---

## Arquivo `.zshrc`

```js
# If you come from bash you might have to change your $PATH.
# export PATH=$HOME/bin:/usr/local/bin:$PATH

# Path to your oh-my-zsh installation.
export ZSH="/home/cristiano/.oh-my-zsh"

export ANDROID_HOME=/opt/android-sdk
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/platform-tools

# Set name of the theme to load --- if set to "random", it will
# load a random theme each time oh-my-zsh is loaded, in which case,
# to know which specific one was loaded, run: echo $RANDOM_THEME
# See https://github.com/ohmyzsh/ohmyzsh/wiki/Themes
ZSH_THEME="spaceship"

# Set list of themes to pick from when loading at random
# Setting this variable when ZSH_THEME=random will cause zsh to load
# a theme from this variable instead of looking in ~/.oh-my-zsh/themes/
# If set to an empty array, this variable will have no effect.
# ZSH_THEME_RANDOM_CANDIDATES=( "robbyrussell" "agnoster" )

# Uncomment the following line to use case-sensitive completion.
# CASE_SENSITIVE="true"

# Uncomment the following line to use hyphen-insensitive completion.
# Case-sensitive completion must be off. _ and - will be interchangeable.
# HYPHEN_INSENSITIVE="true"

# Uncomment the following line to disable bi-weekly auto-update checks.
# DISABLE_AUTO_UPDATE="true"

# Uncomment the following line to automatically update without prompting.
# DISABLE_UPDATE_PROMPT="true"

# Uncomment the following line to change how often to auto-update (in days).
# export UPDATE_ZSH_DAYS=13

# Uncomment the following line if pasting URLs and other text is messed up.
# DISABLE_MAGIC_FUNCTIONS=true

# Uncomment the following line to disable colors in ls.
# DISABLE_LS_COLORS="true"

# Uncomment the following line to disable auto-setting terminal title.
# DISABLE_AUTO_TITLE="true"

# Uncomment the following line to enable command auto-correction.
# ENABLE_CORRECTION="true"

# Uncomment the following line to display red dots whilst waiting for completion.
# COMPLETION_WAITING_DOTS="true"

# Uncomment the following line if you want to disable marking untracked files
# under VCS as dirty. This makes repository status check for large repositories
# much, much faster.
# DISABLE_UNTRACKED_FILES_DIRTY="true"

# Uncomment the following line if you want to change the command execution time
# stamp shown in the history command output.
# You can set one of the optional three formats:
# "mm/dd/yyyy"|"dd.mm.yyyy"|"yyyy-mm-dd"
# or set a custom format using the strftime function format specifications,
# see 'man strftime' for details.
# HIST_STAMPS="mm/dd/yyyy"

# Would you like to use another custom folder than $ZSH/custom?
# ZSH_CUSTOM=/path/to/new-custom-folder

# Which plugins would you like to load?
# Standard plugins can be found in ~/.oh-my-zsh/plugins/*
# Custom plugins may be added to ~/.oh-my-zsh/custom/plugins/
# Example format: plugins=(rails git textmate ruby lighthouse)
# Add wisely, as too many plugins slow down shell startup.
plugins=(
    git 
    docker 
    fast-syntax-highlighting 
    zsh-autosuggestions      
    zsh-completions 
    yarn-completion 
    zsh-better-npm-completion
  )

autoload -U compinit && compinit

source $ZSH/oh-my-zsh.sh

# User configuration

export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm

# export MANPATH="/usr/local/man:$MANPATH"

# You may need to manually set your language environment
# export LANG=en_US.UTF-8

# Preferred editor for local and remote sessions
# if [[ -n $SSH_CONNECTION ]]; then
#   export EDITOR='vim'
# else
#   export EDITOR='mvim'
# fi

# Compilation flags
# export ARCHFLAGS="-arch x86_64"

# Set personal aliases, overriding those provided by oh-my-zsh libs,
# plugins, and themes. Aliases can be placed here, though oh-my-zsh
# users are encouraged to define aliases within the ZSH_CUSTOM folder.
# For a full list of active aliases, run `alias`.
#
# Example aliases
# alias zshconfig="mate ~/.zshrc"
# alias ohmyzsh="mate ~/.oh-my-zsh"

SPACESHIP_PROMPT_ORDER=(
  user          # Username section
  dir           # Current directory section
  host          # Hostname section
  git           # Git section (git_branch + git_status)
  hg            # Mercurial section (hg_branch  + hg_status)
  exec_time     # Execution time
  line_sep      # Line break
  vi_mode       # Vi-mode indicator
  jobs          # Background jobs indicator
  exit_code     # Exit code section
  char          # Prompt character
)
SPACESHIP_USER_SHOW=always
SPACESHIP_PROMPT_ADD_NEWLINE=false
SPACESHIP_CHAR_SYMBOL="~@"
SPACESHIP_CHAR_SUFFIX=" " 


# Simplify prompt if we're using Hyper
#if [[ "$TERM_PROGRAM" == "Hyper" ]]; then
# SPACESHIP_PROMPT_SEPARATE_LINE=true
# SPACESHIP_DIR_SHOW=true
# SPACESHIP_GIT_BRANCH_SHOW=true
#fi

```
---

## Arquivo `.hyper.js`

```js
// Future versions of Hyper may add additional config options,
// which will not automatically be merged into this file.
// See https://hyper.is#cfg for all currently supported options.

module.exports = {
  config: {
    // choose either `'stable'` for receiving highly polished,
    // or `'canary'` for less polished but more frequent updates
    updateChannel: 'stable',

    // default font size in pixels for all tabs
    fontSize: 14,

    // font family with optional fallbacks
    fontFamily: '"Fira Code", Menlo, "DejaVu Sans Mono", Consolas, "Lucida Console", monospace',

    // default font weight: 'normal' or 'bold'
    fontWeight: 'normal',

    // font weight for bold characters: 'normal' or 'bold'
    fontWeightBold: 'normal',

    // line height as a relative unit
    lineHeight: 1,

    // letter spacing as a relative unit
    letterSpacing: 0.5,

    // terminal cursor background color and opacity (hex, rgb, hsl, hsv, hwb or cmyk)
    cursorColor: '#67F86F', //'rgba(248,28,229,0.8)',

    // terminal text color under BLOCK cursor
    cursorAccentColor: '#000',

    // `'BEAM'` for |, `'UNDERLINE'` for _, `'BLOCK'` for ?
    cursorShape: 'BLOCK',

    // set to `true` (without backticks and without quotes) for blinking cursor
    cursorBlink: false,

    // color of the text
    foregroundColor: '#fff',

    // terminal background color
    // opacity is only supported on macOS
    backgroundColor: '#282a36',

    // terminal selection color
    selectionColor: 'rgba(105,113,141,0.3)',

    // border color (window, tabs)
    //borderColor: '#3f3',

       hyperBorder: {
        borderColors: ['#20C5C6', '#3f3', '#6A76FB','#fc1da7'], //'#fc1da7'
        borderWidth: '4px',
	      //borderRadiusOuter: '4px',
	      animate: true,
	        duration: '200ms',
	      //borderAngle: '90deg',
      },    

    // custom CSS to embed in the main window
    css: '',

    // custom CSS to embed in the terminal window
    termCSS: '', //`x-screen x-row { font-variant-ligatures: initial;}`,

    // if you're using a Linux setup which show native menus, set to false
    // default: `true` on Linux, `true` on Windows, ignored on macOS
    showHamburgerMenu: false,

    // set to `false` (without backticks and without quotes) if you want to hide the minimize, maximize and close buttons
    // additionally, set to `'left'` if you want them on the left, like in Ubuntu
    // default: `true` (without backticks and without quotes) on Windows and Linux, ignored on macOS
    showWindowControls: '',

    // custom padding (CSS format, i.e.: `top right bottom left`)
    padding: '0 12px ',

    // the full list. if you're going to provide the full color palette,
    // including the 6 x 6 color cubes and the grayscale map, just provide
    // an array here instead of a color map object
    colors: {
      black: '#000000',
      red: '#ff5555',
      green: '#1DC121',
      yellow: '#C7C329',
      blue: '#fffff9',
      magenta: '#28fdfd',
      cyan: '#20C5C6',
      white: '#C7C7C7',
      lightBlack: '#686868',
      lightRed: '#FD6F6B',
      lightGreen: '#67F86F',
      lightYellow: '#ff62e5',
      lightBlue: '#6A76FB',
      lightMagenta: '#9456ff',
      lightCyan: '#68FDFE',
      lightWhite: '#FFFFFF',
    },

    // the shell to run when spawning a new session (i.e. /usr/local/bin/fish)
    // if left empty, your system's login shell will be used by default
    //
    // Windows
    // - Make sure to use a full path if the binary name doesn't work
    // - Remove `--login` in shellArgs
    //
    // Bash on Windows
    // - Example: `C:\\Windows\\System32\\bash.exe`
    //
    // PowerShell on Windows
    // - Example: `C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe`
    shell: '',

    // for setting shell arguments (i.e. for using interactive shellArgs: `['-i']`)
    // by default `['--login']` will be used
    shellArgs: [],

    // for environment variables
    env: {},

    // set to `false` for no bell
    bell: 'SOUND',

    // if `true` (without backticks and without quotes), selected text will automatically be copied to the clipboard
    copyOnSelect: true,

    // if `true` (without backticks and without quotes), hyper will be set as the default protocol client for SSH
    defaultSSHApp: true,

    // if `true` (without backticks and without quotes), on right click selected text will be copied or pasted if no
    // selection is present (`true` by default on Windows and disables the context menu feature)
    quickEdit: false,

    // choose either `'vertical'`, if you want the column mode when Option key is hold during selection (Default)
    // or `'force'`, if you want to force selection regardless of whether the terminal is in mouse events mode
    // (inside tmux or vim with mouse mode enabled for example).
    macOptionSelectionMode: 'vertical',

    // URL to custom bell
    // bellSoundURL: 'http://example.com/bell.mp3',

    // Whether to use the WebGL renderer. Set it to false to use canvas-based
    // rendering (slower, but supports transparent backgrounds)
    webGLRenderer: false,

    // for advanced config flags please refer to https://hyper.is/#cfg
  },

  // a list of plugins to fetch and install from npm
  // format: [@org/]project[#version]
  // examples:
  //   `hyperpower`
  //   `@company/project`
  //   `project#1.0.1`
  //  "hyper-opacity",  
  plugins: [
    "hyper-font-ligatures",
    "hyper-highlight-active-pane", 
    "hyperborder"    
  ],  

  // in development, you can create a directory under
  // `~/.hyper_plugins/local/` and include it here
  // to load it and avoid it being `npm install`ed
  localPlugins: [],

  keymaps: {
    // Example
    // 'window:devtools': 'cmd+alt+o',

  // User
    "editor:undo": "ctrl+z",
    "editor:redo": "ctrl+y",
    "editor:cut": "ctrl+x",
    "editor:paste": "ctrl+v",
    "editor:selectAll": "ctrl+a",

  // Default
    "window:devtools": "ctrl+shift+i",
    "window:reload": "ctrl+shift+r",
    "window:reloadFull": "ctrl+shift+f5",
    "window:preferences": "ctrl+,",
    "zoom:reset": "ctrl+0",
    "zoom:in": "ctrl+=",
    "zoom:out": "ctrl+-",
    "window:new": "ctrl+shift+n",
    "window:minimize": "ctrl+shift+m",
    "window:zoom": "ctrl+shift+alt+m",
    "window:toggleFullScreen": "f11",
    "window:close": "ctrl+shift+q",
    "tab:new": "ctrl+shift+t",
    "tab:next": [
      "ctrl+shift+]",
      "ctrl+shift+right",
      "ctrl+alt+right",
      "ctrl+tab"
    ],
    "tab:prev": [
      "ctrl+shift+[",
      "ctrl+shift+left",
      "ctrl+alt+left",
      "ctrl+shift+tab"
    ],
    "tab:jump:prefix": "ctrl",
    "pane:next": "ctrl+pageup",
    "pane:prev": "ctrl+pagedown",
    "pane:splitVertical": "ctrl+shift+d",
    "pane:splitHorizontal": "ctrl+shift+e",
    "pane:close": "ctrl+shift+w",
    //"editor:undo": "ctrl+shift+z",
    //"editor:redo": "ctrl+shift+y",
    //"editor:cut": "ctrl+shift+x",
    "editor:copy": "ctrl+shift+c",
    //"editor:paste": "ctrl+shift+v",
    "editor:selectAll": "ctrl+shift+a",
    "editor:movePreviousWord": "ctrl+left",
    "editor:moveNextWord": "ctrl+right",
    "editor:moveBeginningLine": "home",
    "editor:moveEndLine": "end",
    "editor:deletePreviousWord": "ctrl+backspace",
    "editor:deleteNextWord": "ctrl+del",
    "editor:deleteBeginningLine": "ctrl+home",
    "editor:deleteEndLine": "ctrl+end",
    "editor:clearBuffer": "ctrl+shift+k",
    "editor:break": "ctrl+c",
    "plugins:update": "ctrl+shift+u"
    },
};
```
