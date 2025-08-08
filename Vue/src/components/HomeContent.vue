<script setup lang="ts">
import 'devextreme/dist/css/dx.fluent.blue.light.css';
import { DxButton } from 'devextreme-vue/button';
import { DxTooltip } from 'devextreme-vue/tooltip';

</script>
<template>
  <div class="dx-viewport">
    <div class="buttons">
      <DxButton
        id="like"
        icon="like"
      />
      <DxButton
        id="trash"
        icon="trash"
      />
      <DxButton
        id="info"
        icon="info"
      />
    </div>
    <div class="tooltips">
      <DxTooltip
        target="#like"
        show-event="mouseenter"
        hide-event="mouseleave"
        content-template="Like"
      />
      <DxTooltip
        target="#trash"
        show-event="mouseenter"
        hide-event="mouseleave"
        content-template="trashTooltip"
      >
        <template #trashTooltip>
          <div class="red-tooltip">Delete</div>
        </template>
      </DxTooltip>
      <DxTooltip
        target="#info"
        show-event="mouseenter"
        hide-event="mouseleave"
        content-template="infoTooltip"
      >
        <template #infoTooltip>
          <div class="blue-tooltip">Info</div>
        </template>
      </DxTooltip>
    </div>
  </div>
</template>
