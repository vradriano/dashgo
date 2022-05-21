import { Box, Stack, Text, Link, Icon } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiGitBranchLine, RiInputMethodLine } from "react-icons/ri";
import { NavSection } from "./NavSection";
import { NavLink } from './NavLink'

export default function Sidebar() {
  return (
    <Box as="aside" w="64" mr="8">
      <Stack spacing="12" align="flex-start">
        <NavSection title="GERAL">
          <NavLink icon={RiDashboardLine}>Dashboard</NavLink>
          <NavLink icon={RiContactsLine}>Usuários</NavLink>
        </NavSection>

        <NavSection title="AUTOMAÇÃO">
          <NavLink icon={RiInputMethodLine}>Formulários</NavLink>
          <NavLink icon={RiGitBranchLine}>Automação</NavLink>
        </NavSection>
      </Stack>
    </Box>
  )
}