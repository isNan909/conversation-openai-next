import MessageIcon from '@/../public/message.svg'
import Image from 'next/image'
interface SearchProps {
  handleSubmit: any
  input: string
  setInput: (e: string) => void
  error: boolean
  loading: boolean
  className?: string;
}

export function Icon() {
  return <Image className="mr-2" src={MessageIcon} alt="icon" width="20" height="20" />
}

export const Searchbox = ({handleSubmit, input, setInput, loading, error, className, ...restProps}: SearchProps) => {
  return (
    <div className={className}>
      <form onSubmit={handleSubmit}>
        <label>
          <small className="uppercase text-xs  text-gray-400 pb-2 block">Question</small>
          <textarea
            name="textareaValue"
            rows={3}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className='w-full border-2 border-gray-300 bg-white p-4 rounded-lg text-sm focus:outline-none resize-none'
            placeholder='Enter question ...'
          />
        </label>
        {error && (
          <p className='text-xs pt-1 text-red-500'>Character limit exceeded, please enter less text</p>
        )}
        <button type="submit" className='w-full flex text-center items-center justify-center bg-black h-12 0 text-white font-bold py-2 px-4 rounded my-2'
        >{loading ? 'Loading...' : <><Icon/>Search</>}</button>
      </form>
    </div>
  )
}
