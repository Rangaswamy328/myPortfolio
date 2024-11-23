export const navBarItems = [
  { dragTo: "home", text: "About" },
  { dragTo: "projects", text: "Projects" },
  { dragTo: "skills", text: "Skills" },
  { dragTo: "contact", text: "Contact Me" },
];

export const aboutText = {
  name:'Kenche Ranga Swamy',
  p1:"Hello, I'm Kenche Ranga Swamy, a Data Engineer with over 5.5 years of experience in designing and implementing robust data solutions. My expertise lies in leveraging technologies such as Spark, Scala, and Databricks to transform complex data into actionable insights.",
  p2: "I believe that data engineering is not just about building pipelines; it's about enabling organizations to harness the power of their data. I am passionate about creating efficient and scalable data architectures that drive business value.",
  p3: "With a strong background in AWS S3, CI/CD, Terraform, Hive, Hadoop, and Airflow, I consistently strive for excellence in every project. I am excited about the opportunity to apply my skills and passion for data engineering to your upcoming projects.",
  yearOfExperience: 5.5,
  projectsCounts: 8,
}

export const projects = [
 {
  projectName: 'Royal Bank of Canada',
  codeLink: '', // Add a link to the code repository if available
  company: 'TCS',
  description: 'Designed and implemented scalable data pipelines for the Royal Bank of Canada, using Spark and Scala to process and analyze large volumes of financial data. Enhanced data integration processes with AWS S3 and Hive, ensuring data accuracy and accessibility. Collaborated with stakeholders to deliver actionable insights, driving improved decision-making and business outcomes.'
},
 {
  projectName: 'CIGNA',
  codeLink: '', // Add a link to the code repository if available
  company: 'Concentrix',
  description: 'Developed and optimized data pipelines for CIGNA, utilizing Spark and Scala to process large datasets. Integrated AWS S3 for data storage and implemented Airflow for orchestrating workflows, ensuring efficient data retrieval and processing. Collaborated with cross-functional teams to deliver insights that informed business decisions.'
},
{
  projectName: 'Pricing in sales',
  codeLink: 'https://github.com/VinoV1999/TrackMyDay',
  company: 'Brita',
  description: 'Developed a data-driven application to track daily activities and provide insights into time management. Leveraged data analytics to identify productivity patterns and areas for improvement. Implemented data pipelines using Spark and AWS S3 to process user activity data, enabling users to make informed decisions and enhance productivity by reducing time spent on non-essential activities.'
},
]
export const skills = [
  {name:'Next.js',
  img:"https://cdn.worldvectorlogo.com/logos/next-js.svg",},
  {name:'React.js',
  img:"https://cdn.worldvectorlogo.com/logos/react-2.svg",},
  {name:'TypeScript',
  img:"https://cdn.worldvectorlogo.com/logos/typescript.svg",},
  {name:'Redux',
  img:"https://cdn.worldvectorlogo.com/logos/redux.svg",},
  {name:'Tailwind Css',
  img:"https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg",},
  {name:'HTML',
  img:"https://cdn.worldvectorlogo.com/logos/html-1.svg",},
  {name:'Css',
  img:"https://cdn.worldvectorlogo.com/logos/css-3.svg",},
  {name:'JavaScript',
  img:"https://cdn.worldvectorlogo.com/logos/javascript-1.svg",},
  {name:'JQuery',
  img:"https://cdn.worldvectorlogo.com/logos/jquery-1.svg",},
  {name:'Firebase',
  img:"https://cdn.worldvectorlogo.com/logos/firebase-1.svg",},
  {name:'Chart.js',
  img:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAFDElEQVR4AcVXVXDjSBT03zHT9zEzfR39HDMz82KYs8zMzMzMzAxeBi86kTySRiOyIzuW+vQqt8wb6qouTc28191iKVQdhMPhG4ih+kBM1T/g3NzGubWdxnVmXFamPCMrYjIXDiwnSYRuOJAYn3q0vPzZWjM+ePDgXYpitFVUYccr0tC4CSeeAJHGNKdohh3UtIuEI3fXqDnTxI+abu1LuB64sCFMG+l0GidAY5qjtYRL4az9iiJ+rrZxNKq+pnJzkeW4MOwKcN2Em0zhQqA1qjGsClCPyo3Fsixeu2LjY8eO3ceYPkCOcc9JpKAFovGEi8sF1VIP9cpM95iqD2SM3XdJY0mSrmeMZ6pcSHS4g8MOy47D8zxcKaiHekmDtLRAM9DOCodj579tjxw5cm05U1e4KR+6GYduWEilKlFNkAZpBYyDtCXGV0aj0evOc76jt8tMqxCGg0TCRU2DNOl2DTzcsjLrjvOd99ukmMqF6cD3UeMgSdo5ial6NGreftEA3okER2VgySYgfBBXBS9JrBqCAtiXGQAAwhH4zQbBz+kFP78v/FmrcTo2Skk0XGSg5xYHbtrHOWBzgZ3/ArsbALGp8HwPwnQvI0DchWc6QOcx8Av7w28xhIJQCGDLfhAiIo1Xx2i4fwDDfQG7bnJwBvjKoPZdIPwesP39YPwWPHkohEUB+CUCJCvhrdgGBIZkXsWh8IsGAt1GI+04aLyyEg8OUvDySBXPDlfx4ggVu9UUCEgngH3/Ahs/BKb8DvRrDPT6B97kfyE4g6RYFwnANC50G16/qUBR/1PmtC3uDGQUwZ1Siow5K/DQ0DieH6FTCDwShClaaYEAfSaw/COgYyb8jFL4TUuBxkVIF7aCkFVIqnmxAJwLWUe67UigdBCZV7GoA/y8AvhZxUDrhnA3fIn2cyfjieE2Hh0Wx2PDTDw9KoW98hFgx+9Au8ZkDD+3KOgrArLzkS5teZkBYkGA9qOqArQcBr+4ayBUQEJVzCoBpv8E7PkQi5e1w79TVuPz8btQMGM+jm/9Exj2K5mfqK9GgGZ08fULBIoDFp4SzCyB3ykL2PY5sOMDYOsXcDd/B+z6CFj2Ffz8oCanuJoBOvx/BApbn9j7M5kdGMz8Fdj9GbCVgnwKhINt1wz4GSVUU90AY4CCzoF5/jliJ06D3yoHWPcNsC8w3/4FMPRfmqfzXv0AXstBQDY1n9j7C4Ronw2M/RM+7fkFzInIyoOXXwwhKRcOQC8jSdEr6K0VHzEFyMghksBFQhTTBUfXxQVrTujEh4yALmwEHud/GdErkl6VbhrQnQroq9cj1bEr0CSL9oDErojUQ72pDl1IK9B0QdqSrK6KRnHd+T+1Y7EbGOPZqm7JCQCaosOcNZfOH4nBzym4pDHVUG26pAXMmXOhMR2kpQozxpieQx6hS+H48eP3K6oYJGmm71CQyDHER4ypEm+aDT+38BxjmqM1qqFaLXIU1BvjFmIKHxwc4Qeu4h9AfkPj5mIrBRgpH3xLGG6PPmQEZOaeMKcxzdEa+ObtMJIeqIdxa4ksq2+EqgtFEz9rwt6fAMANB8aiZahs1Q5onEmkMc3RGqhG4/YBhYtfQjWJSCRyN1P09oqgT01Ajcpwxk+GM24S1OMSaE7RLYepeofDhw/fE6otlJcrzzLGp+r0W5byidDjScSYPu2oJD1Xhz+n4kNVtcKqcMIxTXwUqg/s3r37RmJ1NP4Dh+C1xvAl0O0AAAAASUVORK5CYII=",},

]
