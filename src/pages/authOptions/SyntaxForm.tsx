import { Link } from "react-router-dom";

interface Props {
	signIn: boolean;
}

const logIn = ["Email", "Password"];

const SyntaxForm = (props: Props) => {
	const { signIn } = props;
	return (
		<div>
			<div aria-label='cover page'></div>]
			<form action=''>
				<h1>Welcome</h1>
				{logIn.map((el, i) => (
					<input key={i} placeholder={el} />
				))}
				<div>
					<label htmlFor='rememberMe'>
						<input type='checkbox' value='rememberMe' />
						Remember me
					</label>
					<button>Forgot Password</button>
				</div>
				<button>Sing in</button>
				<p>
					Don't have account? <Link to='../SingUp'>Sing UP</Link>
				</p>
			</form>
		</div>
	);
};
export { SyntaxForm };
