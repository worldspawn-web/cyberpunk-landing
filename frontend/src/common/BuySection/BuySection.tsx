import {
  Grid,
  GridLeft,
  GridRight,
  MainHeader,
  Platform,
  PlatformCell,
  PlatformHeader,
  PlatformLink,
  PlatformRow,
  SubHeader,
  Table,
  TableCell,
  TableRow,
  Wrapper,
} from './BuySectionComponents';

import {
  DiskIcon,
  CollectionsIcon,
  PCLogo,
  XboxOneLogo,
  StadiaLogo,
  PS4Logo,
  ActivationCodeIcon,
} from '../../assets';

export const BuySection = () => {
  return (
    <Wrapper>
      <Grid>
        <GridLeft>
          <img src="../public/cyberpunk_disc.png" />
        </GridLeft>
        <GridRight>
          <MainHeader> Купить игру Cyberpunk 2077</MainHeader>
          <SubHeader>В комплект входит:</SubHeader>
          <Table>
            <TableRow>
              <TableCell>
                <DiskIcon />
              </TableCell>
              <TableCell>Футляр с игровыми дисками</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <ActivationCodeIcon />
              </TableCell>
              <TableCell>
                Футляр с кодом для загрузки игры и дисками (PC)
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <CollectionsIcon />
              </TableCell>
              <TableCell>Справочник с информацией об игровом мире</TableCell>
            </TableRow>
          </Table>

          <Platform>
            <PlatformHeader>Выберите платформу:</PlatformHeader>

            <Table>
              <PlatformRow>
                <PlatformCell>
                  <PlatformLink>
                    <PCLogo />
                  </PlatformLink>
                </PlatformCell>
                <PlatformCell>
                  <PlatformLink>
                    <XboxOneLogo />
                  </PlatformLink>
                </PlatformCell>
              </PlatformRow>
              <PlatformRow>
                <PlatformCell>
                  <PlatformLink>
                    <StadiaLogo />
                  </PlatformLink>
                </PlatformCell>
                <PlatformCell>
                  <PlatformLink>
                    <PS4Logo />
                  </PlatformLink>
                </PlatformCell>
              </PlatformRow>
            </Table>
          </Platform>
        </GridRight>
      </Grid>
    </Wrapper>
  );
};
