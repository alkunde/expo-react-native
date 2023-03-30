## Expo React Native Bare App Stack

The **expo-react-native** is a stack for build React Native apps with Expo CLI.

The default template of this stack use those technologies:

- React Native
- Expo CLI
- JavaScript //TODO: Typescript
- Styled components

If you need more features you can apply as many plugins as you want.

## How to use

The following steps show how to import the stack and create an application using the **expo-react-native** stack.

1. First, import the stack:
```sh
stk import stack https://github.com/alkunde/expo-react-native
```

2. Now, verify if the stack was imported correctly:
```sh
stk list stack | grep expo-react-native
```

3. Create your application and answer all the questions:
```sh
stk create app <app_name> -t expo-react-native/new-project
```


## Extending your project's capabilities with Plugins

* [Firebase](caminho-repositorio): //TODO:

* [React Navigation](caminho-repositorio): //TODO:


## Support

If you need any help, please open an [issue on Stack's Github repository](https://github.com/alkunde/expo-react-native/issues).