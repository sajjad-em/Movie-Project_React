import { ThreeDot } from "react-loading-indicators";

export default function Loading() {
    return <>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '150px' }}>
            <ThreeDot variant="bounce" color="#5307ff" size="large" text="loading" textColor="#5307ff" />  ;
        </div>
    </>
}