import AppLink from "./AppLink";

const HeadContainer = ({children}) => {
    return ( <>
    
    <div className="navbar">
    <span >Home</span>
        <span> {AppLink({ href: "/users", text: "Users" })}</span>
       {children}
    </div>
    
    </> );
}
 
export default HeadContainer;