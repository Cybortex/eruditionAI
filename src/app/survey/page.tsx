

function SurveyPage() {
  return (
    <main className='bg-black-200 flex justify-center items-center m-auto px-15 py-[15rem]'>

      <div style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSeRkAS5thO6ZS3Z6gzffmte6weodOpNFpxsZT89c3ggQHXXhA/viewform?embedded=true"
        width="640"
        height="800"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
      >
        Loading…
      </iframe>
    </div>
      
    </main>
  )
}

export default SurveyPage