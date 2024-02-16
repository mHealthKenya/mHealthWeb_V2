import React from 'react'

function Team() {
  return (
    <section className="bg-gray dark:bg-gray-900">
  <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
      <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Our Team</h2>
          {/* <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">Explore the whole collection of open-source web components and elements built with the utility classNamees from Tailwind</p> */}
      </div> 
      <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="text-center text-gray-500 dark:text-gray-400">
              <img className="mx-auto mb-4 w-36 h-36 rounded-full" src="/assests/images/Team/DrCathy.jpeg" alt="Dr Cathy Mwangi"/>
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="#">Dr Cathy Mwangi</a>
              </h3>
              <p>Founder</p>
          </div>
          <div className="text-center text-gray-500 dark:text-gray-400">
              <img className="mx-auto mb-4 w-36 h-36 rounded-full" src="/assests/images/Team/directorMary.jpeg" alt="Director Mary"/>
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="#">Mary Kironyo</a>
              </h3>
              <p>Director</p>
          </div>
          <div className="text-center text-gray-500 dark:text-gray-400">
              <img className="mx-auto mb-4 w-36 h-36 rounded-full" src="/assests/images/Team/drVannessa.jpeg" alt="Dr Vanessa Kithyoma"/>
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="#">Dr Vanessa Kithyoma</a>
              </h3>
              <p>CEO</p>
          </div>
          <div className="text-center text-gray-500 dark:text-gray-400">
              <img className="mx-auto mb-4 w-36 h-36 rounded-full" src="/assests/images/Team/christine.jpeg" alt="Christine Maghanga"/>
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="#">Christine Maghanga</a>
              </h3>
              <p>Project Officer</p>
          </div>
          <div className="text-center text-gray-500 dark:text-gray-400">
              <img className="mx-auto mb-4 w-36 h-36 rounded-full" src="/assests/images/Team/beatrice.jpeg" alt="Beatrice Inyanza"/>
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="#">Beatrice Inyanza</a>
              </h3>
              <p>Finance Officer</p>
          </div>
          <div className="text-center text-gray-500 dark:text-gray-400">
              <img className="mx-auto mb-4 w-36 h-36 rounded-full" src="/assests/images/Team/joel.jpeg" alt="Joel Wekesa"/>
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="#">Joel Wekesa</a>
              </h3>
              <p>Software Developer</p>
          </div>
          <div className="text-center text-gray-500 dark:text-gray-400">
              <img className="mx-auto mb-4 w-36 h-36 rounded-full" src="/assests/images/Team/dennis.jpeg" alt="Dennis Mureti"/>
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="#">Dennis Mureti</a>
              </h3>
              <p>Software Developer</p>
          </div>
          <div className="text-center text-gray-500 dark:text-gray-400">
              <img className="mx-auto mb-4 w-36 h-36 rounded-full" src="/assests/images/Team/guyo.jpeg" alt="Guyo Abdub"/>
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="#">Guyo Abdub</a>
              </h3>
              <p>Software Developer</p>
          </div>
          <div className="text-center text-gray-500 dark:text-gray-400">
              <img className="mx-auto mb-4 w-36 h-36 rounded-full" src="/assests/images/Team/diram.jpeg" alt="Diram Bora"/>
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="#">Diram Bora</a>
              </h3>
              <p>UI/UX Designer</p>
          </div>
      </div>  
  </div>
</section>
  )
}

export default Team