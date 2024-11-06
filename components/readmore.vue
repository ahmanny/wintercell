Copy code
<template>
  <div>
    <p class=" mb-1">
      {{ isExpanded ? longText : longText.slice(0, limit) }}
      <span
        ><button
          v-if="longText.length > limit"
          @click="(event)=>{
            isExpanded = !isExpanded
            event.stopPropagation()
          }"
          class=" font-medium text-black"
        >
          {{ isExpanded ? "...read less" : "...read more" }}
        </button></span
      >
    </p>
  </div>
</template>

<script>
export default {
    props:['longText'],
  data() {
    return {
      isExpanded: false, // Toggle for showing full text
      limit:100, // Character limit for truncating text
    };
  },
};
</script>
