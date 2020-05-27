<template lang="html">
  <div class='node-info' v-if="helixNode.nodeInfo.appName !== null">
    <legend class="blue-color">NODE INFO</legend>
    <table class="wrap striped">
        <tbody>
            <tr>
                <td>Application Name</td>
                <td class="mono-space">{{ helixNode.nodeInfo.appName }}</td>
            </tr>
            <tr>
                <td title="Current pendulum version">Application Version</td>
                <td class="mono-space">{{ helixNode.nodeInfo.appVersion }}</td>
            </tr>
                <tr>
                <td title="Current Round index of the tangle">Current Round Index</td>
                <td class="mono-space">{{ helixNode.nodeInfo.currentRoundIndex }}</td>
            </tr>
              <tr>
                <td title="Latest Solid Round index of the tangle"> Latest Solid Round Index</td>
                <td class="mono-space">{{ helixNode.nodeInfo.latestSolidRoundIndex }}</td>
            </tr>
                <tr>
                <td title="Current Solid Round hash of the tangle"> Latest Solid Round Hash</td>
                <td class="mono-space">
                  <router-link class="blue-color" :title="helixNode.nodeInfo.latestSolidRoundHash" :to="{ name: 'Transaction', params: { hash: helixNode.nodeInfo.latestSolidRoundHash }}">{{ helixNode.nodeInfo.latestSolidRoundHash }}</router-link>
                </td>
            </tr>

            <tr>
                <td title="Round start index of the tangle">Round Start Index</td>
                <td class="mono-space">{{ helixNode.nodeInfo.roundStartIndex }}</td>
            </tr>
             <tr>
                <td title="Last Snapshotted Round Index">Last Snapshotted Round Index</td>
                <td class="mono-space">{{ helixNode.nodeInfo.lastSnapshottedRoundIndex }}</td>
            </tr>
            <tr>
                <td title="Number of neighbouring nodes connected">Number of Neighbours</td>
                <td class="mono-space">{{ helixNode.nodeInfo.neighbors }}</td>
            </tr>
            <tr>
                <td title="Time since genesis transaction">Time</td>
                <td class="mono-space">{{ helixNode.nodeInfo.time }}</td>
            </tr>
            <tr>
                <td title="Number of uncomfirmed transactions in the tangle">Number of tips</td>
                <td class="mono-space">{{ helixNode.nodeInfo.tips }}</td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
import helixNode from "@/utils/helix-node";

export default {
  data() {
    return {
      helixNode
    }
  }
}
</script>

<style scoped>
.blue-color{
color:#1e7fde;
}
</style>>
