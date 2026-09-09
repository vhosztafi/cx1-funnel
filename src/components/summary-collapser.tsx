'use client';
import {useState,type ReactNode} from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
function Pencil(){return <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25ZM20.71 7.04a1 1 0 0 0 0-1.42l-2.34-2.34a1 1 0 0 0-1.42 0l-1.83 1.83 3.75 3.75 1.84-1.82Z"/></svg>;}
// MTS-14-U01: independent closed defaults and deliberately repeated collapse IDs.
export function SummaryCollapser({text,edit,children}:{text:string;edit:()=>void;children:ReactNode}){const [open,setOpen]=useState(false);return <div className="border rounded p-4 mt-3"><div className="d-flex align-items-center justify-content-between"><div className="h6">{text}</div><div className="d-flex gap-2"><Button type="button" style={{height:44,padding:'8px 16px',border:'1px solid'}} onClick={edit}><Pencil/> Edit</Button><Button type="button" style={{height:44}} aria-expanded={open} aria-controls="example-collapse-text" onClick={()=>setOpen(!open)}><svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" strokeWidth="2" d={open?'m6 15 6-6 6 6':'m6 9 6 6 6-6'}/></svg></Button></div></div><Collapse in={open}><div id="example-collapse-text">{children}</div></Collapse></div>;}
