# Pet Project: Photo App

## Setup Enviroment

1. Add SCSS Support

```
    npm i --save-dev node-sass
```

2. Add react router

```
    npm i --save react-router-dom
```

3. Add UI lib

```
    npm i --save reactstrap
```

## Structure Folder
```
    src
    |__assets
    |  |__images
    |  |__styles (global styles)
    |
    |__components (shared components)
    |
    |__features
        |__Photo
            |__components
            |    |__PhotoList
            |    |__PhotoCard
            |    |__PhotoForm
            |__pages
            |   |__MainPage
            |   |__AddEditPage
            |__photoSlice.js
            |__index.js
```

## Organize Routing 
- Use lazy load components
- Load from each features