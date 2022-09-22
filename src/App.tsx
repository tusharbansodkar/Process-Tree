import * as React from "react";
import TreeView from "@mui/lab/TreeView";
import TreeItem from "@mui/lab/TreeItem";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Box, Button } from "@mui/material";

function App() {
  const [expanded, setExpanded] = React.useState<string[]>([]);
  const [selected, setSelected] = React.useState<string[]>([]);

  const handleToggle = (event: React.SyntheticEvent, nodeIds: string[]) => {
    setExpanded(nodeIds);
  };

  const handleSelect = (event: React.SyntheticEvent, nodeIds: string[]) => {
    setSelected(nodeIds);
  };

  const handleExpandClick = () => {
    setExpanded((oldExpanded) =>
      oldExpanded.length === 0 ? ["1", "5"] : []
    );
  };

  const handleSelectClick = () => {
    setSelected((oldSelected) =>
      oldSelected.length === 0
        ? ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
        : []
    );
  };

  return (
    <Box sx={{ flexGrow: 1, maxWidth: 400, margin: 'auto'}}>
      <h1>Process Tree</h1>
      <Box sx={{ mb: 1 }}>
        <Button onClick={handleExpandClick}>
          {expanded.length === 0 ? "Expand all" : "Collapse all"}
        </Button>
        <Button onClick={handleSelectClick}>
          {selected.length === 0 ? "Select all" : "Unselect all"}
        </Button>
      </Box>
      <TreeView
        aria-label="controlled"
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
        expanded={expanded}
        selected={selected}
        onNodeToggle={handleToggle}
        onNodeSelect={handleSelect}
        multiSelect
      >
       <TreeItem nodeId='1' label='Process'>
        <TreeItem nodeId='2' label='Events' />
        <TreeItem nodeId="3" label='Tasks'  />
        <TreeItem nodeId='4' label='Decisions' />

        <TreeItem nodeId='5' label='Input' >
          <TreeItem nodeId='6' label='People'/>
          <TreeItem nodeId='7' label='Raw Material'/>
          <TreeItem nodeId='8' label='Information'/>

        </TreeItem>
        <TreeItem nodeId='9' label='Output'/>

       </TreeItem>
      </TreeView>
    </Box>
  );
}

export default App;
