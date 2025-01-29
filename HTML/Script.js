function downloadCV() {
    const link = document.createElement('a');
    link.href = '../HTML/zeineblahbachaCV.pdf';  
    link.download = 'CV_zeineb_Lahbacha.pdf';  
    document.body.appendChild(link);  
    link.click();                     
    document.body.removeChild(link);  

}

