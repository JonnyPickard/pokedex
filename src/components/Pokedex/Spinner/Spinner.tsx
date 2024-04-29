import * as styles from "./Spinner.styles";

export function Spinner() {
  return (
    <div css={styles.SpinnerContainer}>
      <div css={styles.Spinner} />
      <p>Loading...</p>
    </div>
  );
}
