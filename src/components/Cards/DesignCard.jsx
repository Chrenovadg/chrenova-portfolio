import dgIcon from '../../assets/img/dg.svg'


export const DesignCard = () => {
  return (
    <>
      <div className="max-w-sm rounded-lg py-2">
          <h5 className="mb-2 text-4xl font-[900] tracking-tight text-gray-900 text-secondary"> Diseño Gráfico </h5>
      </div>

      <div className="card__container max-w-sm">
          <div className="flex justify-center mt-4">
              <a href="#">
                  <img className="icon" src={dgIcon} alt="" />
              </a>
          </div>

          <div className="p-5">
              <p className="mb-3 font-normal text-gray-700">
              Comunicación gráfica llamativa que cautiva a tu audiencia en un mundo visualmente saturado.
              </p>
              <a href="#" className="card__btn inline-flex items-center px-3 py-2 text-sm font-medium text-center rounded-lg ">
                  Conoce más
                  <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                  </svg>
              </a>
          </div>
      </div>
    </>
  )
}
