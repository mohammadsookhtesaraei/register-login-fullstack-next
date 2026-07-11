import Btn from "@/components/ui/btn";
import TextField from "@/components/ui/textField";

type RegisterProps = {
  email: string;
  password: string;
  changeHandler: (
    e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ) => void;
  formHanadler: (e: React.SubmitEvent<HTMLFormElement>) => void;
   isLoading:boolean
};
const Register = ({
  email,
  password,
  changeHandler,
  formHanadler,
  isLoading
}: RegisterProps) => {
  return (
    <div className="max-w-sm w-full">
      <form
        onSubmit={formHanadler}
        className="w-full space-y-8 p-6 border rounded-xl border-gray-400/30"
      >
        <TextField
          label="email"
          name="email"
          value={email}
          onChange={changeHandler}
        />
        <TextField
          label="password"
          name="password"
          value={password}
          onChange={changeHandler}
        />
        <Btn className="w-full" variant="primary" type="submit">
          {isLoading ? "loading" :"send"}
        </Btn>
      </form>
    </div>
  );
};
export default Register;
