import Btn from "@/components/ui/btn"
import TextField from "@/components/ui/textField"

const Register = () => {
  return (
    <div className="max-w-sm w-full">
      <form className="w-full space-y-8 p-6 border rounded-xl border-gray-400/30">
       <TextField label="email"/>
       <TextField label="password"/>
       <Btn className="w-full" variant="primary" type="submit">send</Btn>
      </form>
    </div>
  )
}
export default Register