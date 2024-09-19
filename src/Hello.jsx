import './Hello.css';
export default function Hello ({firstname,lastname="jaidee",age=25}){
    return (<><h1>Hello Word {firstname}{lastname}{age}</h1>
            </>
            );
}
