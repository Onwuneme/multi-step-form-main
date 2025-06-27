import thanksLogo from '../assets/icon-thank-you.svg'
export default function Step5(){
    return(
        <>
        <div className='flex flex-col items-center justify-between my-6 mx-3'>

        <img src={thanksLogo} className=' w-15 h-15' alt="" />
        <h1 className='my-4'>Thank you</h1>
       <h4 className='text-center'>
         Thanks for conirming your Subsrciption!
        We hope you have fun using our 
         platorm. if you ever need support,
         please feel free to email us at 
         support@loremganinng.com
       </h4>
        </div>
            
         
        </>
    )
}