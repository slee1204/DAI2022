import { Button, Loader, Input } from 'semantic-ui-react';


export default function LoginForm({

    loginState="before",
    onLoginClick=()=>{}



}){
    var c = "blue";
    var btn_txt = "Click Me"
  
    if(loginState === "before"){
      c = "twitter";
      btn_txt = "Log In"
    }
    
    if(loginState === "during"){
      c = "youtube";
      btn_txt = "Logging In"
    }
  
    if(loginState === "after"){
      c = "yellow";
      btn_txt = "Success"
    }
  
    const HandleButton = () =>{
      if(loginState === "before"){ 
        setLoginState("during");
      }
  
      if(loginState === "during"){ 
        setLoginState("after");
      }
  
      if (loginState === "after"){
        r.push("/dashboard");
      }
    }

    return <div>
        <h3>Login Form</h3>
        <Input 
            disabled={loginState !== "before"}
            placeholder = "email" 
        />
        <Input 
            disabled={loginState !== "before"}
            placeholder = "password" 
        />
        <hr />
        <Button color={c} onClick = {onLoginClick}>
            {btn_txt}
            {loginState === "during" && <Loader active/>}
      </Button>
    </div>
}