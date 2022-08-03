import { colors, fonts } from '../../styles/theme'

export default function Button ({ children, onClick, disabled }) {
  return (
    <>
      <button disabled={disabled} onClick={onClick}>
        {children}
      </button>

      <style jsx>{`
        button {
          background: ${colors.black};
          cursor: pointer;
          border: 0;
          color: #fff;
          display: flex;
          font-size: 16px;
          padding: 8px 24px;
          line-height: 26px;
          border-radius: 8px;
          font-family: ${fonts.base};
          user-select: none;
        }

        button[disabled] {
          pointer-events: none;
          opacity: 0.2;
        }

        button > :global(svg) {
          margin-right: 8px;
        }

        button:hover {
          opacity: .7;
        }
      `}</style>
    </>
  )
}
