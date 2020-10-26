import { COLORS } from 'constants/theme'
import IconTooltip from 'molecules/icon-tooltip'
import React from 'react'

import * as styles from './styles'

const Nav = () => {
  const LINKS = {
    in: 'https://www.linkedin.com/in/wricke/',
    repo: 'https://github.com/wricke/ze-code-challenge',
    commits: 'https://github.com/wricke/ze-code-challenge/commits/main',
  }

  const LABELS = {
    in: 'LinkedIn',
    commits: 'Commits',
    repo: 'Repositório',
  }

  const iconsSize = 24

  const iconColor = COLORS.light_gray

  return (
    <nav css={styles.baseContainer}>
      <a aria-label={LABELS.in} href={LINKS.in} target="_blank" rel="noreferrer">
        <IconTooltip iconColor={iconColor} iconSize={iconsSize} iconName="AiFillLinkedin" text={LABELS.in} />
      </a>
      <a aria-label={LABELS.repo} href={LINKS.repo} target="_blank" rel="noreferrer">
        <IconTooltip iconColor={iconColor} iconSize={iconsSize} iconName="GoRepo" text={LABELS.repo} />
      </a>
      <a aria-label={LABELS.commits} href={LINKS.commits} target="_blank" rel="noreferrer">
        <IconTooltip iconColor={iconColor} iconSize={iconsSize} iconName="GoHistory" text={LABELS.commits} />
      </a>
    </nav>
  )
}

export default Nav
