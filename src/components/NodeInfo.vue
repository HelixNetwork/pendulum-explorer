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
                <td title="Current IRI version">Application Version</td>
                <td class="mono-space">{{ helixNode.nodeInfo.appVersion }}</td>
            </tr>
            <tr>
                <td title="Current Milestone hash of the tangle"> Latest Milestone</td>
                <td class="mono-space">
                  <router-link  class="blue-color" :title="helixNode.nodeInfo.latestMilestone" :to="{ name: 'Transaction', params: { hash: helixNode.nodeInfo.latestMilestone }}">{{ helixNode.nodeInfo.latestMilestone }}</router-link>
                </td>
            </tr>
            <tr>
                <td title="Current Milestone index of the tangle">Lastest Milestone Index</td>
                <td class="mono-space">{{ helixNode.nodeInfo.latestMilestoneIndex }}</td>
            </tr>
            <tr>
                <td title="Current Solid Subtangle hash of the tangle"> Lastest Solid Subtangle Milestone</td>
                <td class="mono-space">
                  <router-link class="blue-color" :title="helixNode.nodeInfo.latestSolidSubtangleMilestone" :to="{ name: 'Transaction', params: { hash: helixNode.nodeInfo.latestSolidSubtangleMilestone }}">{{ helixNode.nodeInfo.latestSolidSubtangleMilestone }}</router-link>
                </td>
            </tr>
            <tr>
                <td title="Current Solid Subtangle index of the tangle">Lastest Solid Subtangle Milestone Index</td>
                <td class="mono-space">{{ helixNode.nodeInfo.latestSolidSubtangleMilestoneIndex }}</td>
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
require('@/lib/iota')
var helixNode = require("@/utils/helix-node")

export default {
  data() {
    return {
      helixNode: helixNode
    }
  }
}
</script>

<style scoped>
.blue-color{
color:#1e7fde;
}
</style>>
