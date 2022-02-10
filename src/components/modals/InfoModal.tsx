import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="How to play" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Guess the word in 10 tries. After each guess, the color of the tiles will
        change to show how close your guess was to the word.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="S" status="correct" />
        <Cell value="T" />
        <Cell value="R" />
        <Cell value="A" />
        <Cell value="W" />
        <Cell value="B" />
        <Cell value="E" />
        <Cell value="R" />
        <Cell value="R" />
        <Cell value="Y" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter S is in the word and in the correct spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="F" />
        <Cell value="R" />
        <Cell value="I" />
        <Cell value="E" status='present'/>
        <Cell value="N" />
        <Cell value="D" />
        <Cell value="S" />
        <Cell value="H" />
        <Cell value="I" />
        <Cell value="P" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter E is in the word but in the wrong spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="M" />
        <Cell value="O" />
        <Cell value="T" />
        <Cell value="I" status="absent" />
        <Cell value="V" />
        <Cell value="A" />
        <Cell value="T" />
        <Cell value="I" />
        <Cell value="O" />
        <Cell value="N" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter I is not in the word in any spot.
      </p>
    </BaseModal>
  )
}
