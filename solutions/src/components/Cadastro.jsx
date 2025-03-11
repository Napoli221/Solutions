import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { ChevronDownIcon } from '@heroicons/react/16/solid'

export default function Cadastro() {
  return (
    <>
    <div className='mt-50 h-screen w-screen bg-blue-100'>
    <form>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base/7 font-semibold text-gray-900 flex items-center justify-center">Cadastro</h2>
        </div>
</div>

<div className="border-b border-gray-900/10 pb-12">
          <div className="mt-12 grid grid-cols-1 gap-x-1 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block ml-9 text-sm/6 font-medium text-gray-900">
                Nome
              </label>
              <div className="mt-2">
                <input
                  id="first-name"
                  name="first-name"
                  type="text"
                  autoComplete="given-name"
                  className="block w-200 ml-8 rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm/6 font-medium text-gray-900">
                Sobrenome
              </label>
              <div className="mt-2">
                <input
                  id="last-name"
                  name="last-name"
                  type="text"
                  autoComplete="family-name"
                  className="block w-200 rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="email" className="block ml-9 text-sm/6 font-medium text-gray-900">
                CPF
              </label>
              <div className="mt-2">
                <input
                  id="cpf"
                  name="cpf"
                  type="text"
                  autoComplete="text"
                  className="block w-200 ml-8 rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
            <div className="col-span-full">
              <label htmlFor="street-address" className="block ml-236 -mt-24 text-sm/6 font-medium text-gray-900">
                CNPJ
              </label>
              <div className="mt-2">
                <input
                  id="cnpj"
                  name="cnpj"
                  type="text"
                  autoComplete="cnpj"
                  className="block w-200 ml-235 mt-1 rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
              <label htmlFor="city" className="block text-sm/6 ml-71 font-medium text-gray-900">
                Endereço
              </label>
              <div className="mt-2">
                <input
                  id="endereco"
                  name="endereci"
                  type="text"
                  autoComplete="endereco"
                  className="block w-150 ml-70 rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="region" className="block ml-96 text-sm/6 font-medium text-gray-900">
                Codigo
              </label>
              <div className="mt-2">
                <input
                  id="codigo"
                  name="codigo"
                  type="text"
                  autoComplete="codigo"
                  className="block w-150 ml-95 rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-3">
            <button className="text-sm bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded text-white shadow md-8">Login</button>
        </div>

    </form>
    </div>
    </>
  )
}
