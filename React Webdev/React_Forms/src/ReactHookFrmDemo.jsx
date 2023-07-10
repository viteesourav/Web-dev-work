import { useForm } from 'react-hook-form'

export default function ReactHookFrmDemo() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: 'onChange'
    });

    const validationLogic = {
        firstName: {
            required: "FirstName is Required"
        },
        lastName: {
            required: "LastName is Required"
        },
        qty: {
            required: 'qty cannot be empty',
            min: {
                value: 0,
                message: 'Qty cannot be less than 0'
            },
            max: {
                value: 20,
                message: 'Qty cannot be more than 20'
            }
        },
        password: {
            required: 'Password cannot be empty',
            minLength: {
                value: 8,
                message: 'password minLength should be 8 characters'
            }
        }
    }

    const handleFrmSubmimt = (formData) => {    
        console.log('we are submitting the form');
        console.log(formData);
    }

    return(
        <>
        <h1>React-Hook-Form Demo</h1>
        <form onSubmit={handleSubmit(handleFrmSubmimt)}>
            <div>
                <input type="text" name="firstName" id="firstName"
                placeholder="First Name"
                {...register('firstName', validationLogic.firstName)} />
                {errors?.firstName && <span style={{color:"red"}}>{errors.firstName.message}</span>}
            </div>
            <div>
                <input type="text" name="lastName" id="lastName"
                placeholder="Last Name"
                {...register("lastName", validationLogic.lastName)} />
                {errors?.lastName && <span style={{color:"red"}}>{errors.lastName.message}</span>}
            </div>
            <div>
                <input type="qty" name="qty" id="qty"
                placeholder="qty"
                {...register("qty", validationLogic.qty)} />
                {errors?.qty && <span style={{color:"red"}}>{errors.qty.message}</span>}
            </div>
            <div>
                <input type="password" name="password" id="password"
                placeholder="password"
                {...register("password", validationLogic.password)} />
                {errors?.password && <span style={{color:"red"}}>{errors.password.message}</span>}
            </div>
            <button>Submit</button>
        </form>
        </>
    )
}