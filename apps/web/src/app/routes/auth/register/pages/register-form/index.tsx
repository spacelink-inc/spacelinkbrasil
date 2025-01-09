import { useSearchParams } from '@/hooks/use-url-params'
import { EmailAndPasswordStep } from './email-and-password-step'
import { ValidateEmailStep } from './validate-email-step'
import { CompleteRegisterStep } from './complete-register-step'
import { SuccessStep } from './success-step'
import { Error404 } from '@/components/templates/errors/404'
export const RegisterWithToken = () => {
    const { getParam } = useSearchParams()

    if (getParam('step') === '1' || !getParam('step')) {
        return <EmailAndPasswordStep />
    } else if (getParam('step') === '2') {
        return <ValidateEmailStep />
    } else if (getParam('step') === '3') {
        return <CompleteRegisterStep />
    } else if (getParam('step') === '4') {
        return <SuccessStep />
    }

    return <Error404 />
}
