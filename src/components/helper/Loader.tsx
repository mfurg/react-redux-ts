import { Rings } from  'react-loader-spinner'

export const Loader = () => {
    return(
        <div className='center'>
            <Rings
                    height = "80"
                    width = "80"
                    color = 'teal'
                    ariaLabel = 'three-dots-loading'
                />
        </div>
    )
}