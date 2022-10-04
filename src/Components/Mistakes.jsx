import { RadioGroup } from '@headlessui/react';

export const Mistakes = ({ title, answer, index }) => {
  return (
    <div>
      <h1 className='text-2xl font-semibold text-[#00abae]'>
        {`${index + 1}. ${title}`} ?
      </h1>
      <RadioGroup className='px-5 pt-4'>
        <RadioGroup.Option
          value={answer.answer_text}
          defaultValue={answer.answer_text}
          className='relative max-w-6xl border p-4 flex flex-col cursor-pointer md:pl-4 md:pr-6  focus:outline-none bg-red-100 border-[#00abae21] z-10 text-gray-600 rounded'
        >
          {({ checked, active }) => (
            <div className='  flex items-center space-x-10'>
              <span
                className='h-4 w-4 rounded-full border flex items-center justify-center bg-red-400 border-transparent'
                aria-hidden='true'
              >
                <span className='rounded-full bg-white w-1.5 h-1.5' />
              </span>
              <RadioGroup.Label className={'font-semibold'}>
                {answer.answer_text}
              </RadioGroup.Label>
            </div>
          )}
        </RadioGroup.Option>
      </RadioGroup>
    </div>
  );
};
