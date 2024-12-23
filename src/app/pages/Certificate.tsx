import { For, HStack } from "@chakra-ui/react";
import { Button } from "@/components/ui/button";
import {
  DrawerActionTrigger,
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  DrawerRoot,
} from "@/components/ui/drawer";

const Certificate = () => {
  return (
    <HStack wrap="wrap">
      <For each={["top", "bottom"]}>
        {(placement) => (
          <DrawerRoot key={placement} placement={placement}>
            <DrawerBackdrop />
            <DrawerTrigger asChild>
              <Button variant="outline" size="sm">
                Open ({placement})
              </Button>
            </DrawerTrigger>
            <DrawerContent
              roundedTop={placement === "top" ? "l3" : undefined} // Fix the comparison
              roundedBottom={placement === "bottom" ? "l3" : undefined} // Fix the comparison
            >
              <DrawerHeader>
                <DrawerTitle>Drawer Title</DrawerTitle>
              </DrawerHeader>
              <DrawerBody>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </DrawerBody>
              <DrawerFooter>
                <DrawerActionTrigger asChild>
                  <Button variant="outline">Cancel</Button>
                </DrawerActionTrigger>
                <Button>Save</Button>
              </DrawerFooter>
              <DrawerCloseTrigger />
            </DrawerContent>
          </DrawerRoot>
        )}
      </For>
    </HStack>
  );
};

export default Certificate;
