'use client';
import Button from 'react-bootstrap/Button';
export function Navigator({step,text='Save and Continue',prev,previous,loading=false}:{step:number;text?:string;prev?:()=>void;previous:()=>void;loading?:boolean}) {
  return <div className="text-center d-flex flex-column my-5"><Button type="submit" disabled={loading}>{text}</Button>{step>1&&<Button type="button" className="mx-auto mt-3" variant="link" disabled={loading} onClick={()=>{prev?.();previous();}}>Go Back</Button>}</div>;
}
