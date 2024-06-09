export default function InputError({ message, className = '', ...props }) {
    return message ? (
        <div {...props} className={'alert alert-danger ' + className} role="alert">
            {message}
        </div>
    ) : null;
}
