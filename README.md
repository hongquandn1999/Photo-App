# Pet Project: Photo App

## Setup Enviroment

1. Add SCSS Support

```
    yarn add node-sass
```

2. Add react router

```
    yarn add react-router-dom
```

3. Add UI lib

```
    yarn add reactstrap
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

## Formik 
- Manage Form 
```
    yarn add formik
```
### Custom field in formik
- Cầu nối giữa UI control và Formik
- UI Control là một controlled component với props
    + name: tên xác định của control
    + value: giá trị của control 
    + onChange: trigger hàm này với giá trị mới khi có thay đổi
    + onBlur: xác định khi nào thì control này bị touched
```js
    function InputField(props) {
        const {
            field,
            type, label, placeholder, disabled,
        } = props;
        const { name } = field;
        return (
            <FormGroup>
            {label && <Label for={name}>{label}</Label>}
            <Input
                id={name}
                {...field}
                type={type}
                disabled={disabled}
                placeholder={placeholder}
            />
            </FormGroup>
        );
    }
```
### Random photo control
- Random photo
- Props: 
    + name
    + imgUrl
    + onImgUrlChange
    + onRandomButtonBlur
    