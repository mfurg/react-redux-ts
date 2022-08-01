import 'styles/Modal.css'

interface Modal {
    children: any;
    visible: boolean;
    setVisible: any;
}

export const Modal = ({children, visible, setVisible}:Modal) => {
    const styleClass = ['myModal']
    visible && styleClass.push('active')

    return (
        <div className={styleClass.join(' ') } onClick={() => setVisible(false)}>
            <div className='myModalContent' onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}