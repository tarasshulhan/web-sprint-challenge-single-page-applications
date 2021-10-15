import * as yup from 'yup';

const schema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('Name is required!')
        .min(2, 'name must be at least 2 characters'),
    size: yup
        .string()
        .required('Please choose a size'),
    pepperoni: yup
        .boolean(), 
    prosciutto: yup
        .boolean(),
    threeCheese: yup
        .boolean(),
    sausage: yup
        .boolean(),
    special: yup
        .string()
});

export default schema;