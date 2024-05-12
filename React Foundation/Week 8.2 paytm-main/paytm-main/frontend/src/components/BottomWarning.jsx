import { Link } from "react-router-dom"

export function BottomWarning({label, buttonText, to}) {
    return <div className="py-2 text-sm flex justify-center hover:text-red-200">
      <div>
        {label}
      </div>
      <Link className="pointer underline pl-1 cursor-pointer text-blue-300" to={to}>
        {buttonText}
      </Link>
    </div>
}
  