import { getNodeAutoInstrumentations } from "@opentelemetry/auto-instrumentations-node";
import { OTLPMetricExporter } from "@opentelemetry/exporter-metrics-otlp-proto";
import { OTLPTraceExporter } from "@opentelemetry/exporter-trace-otlp-proto";
import { Resource } from "@opentelemetry/resources";
import { PeriodicExportingMetricReader } from "@opentelemetry/sdk-metrics";
import { NodeSDK } from "@opentelemetry/sdk-node";
import { SemanticResourceAttributes } from "@opentelemetry/semantic-conventions";
import { PrismaInstrumentation } from "@prisma/instrumentation";

const resource = new Resource({
  [SemanticResourceAttributes.SERVICE_NAME]: "backend-service",
  [SemanticResourceAttributes.SERVICE_VERSION]: "1.0.0",
  [SemanticResourceAttributes.SERVICE_INSTANCE_ID]: "instance-1",
});

const traceExporter = new OTLPTraceExporter();
const metricReader = new PeriodicExportingMetricReader({
  exporter: new OTLPMetricExporter(),
});

const instrumentations = [
  getNodeAutoInstrumentations({
    "@opentelemetry/instrumentation-fs": {
      enabled: false,
    },
    "@opentelemetry/instrumentation-express": {
      enabled: true,
    },
  }),
  new PrismaInstrumentation(),
];

const sdk = new NodeSDK({
  resource,
  traceExporter,
  metricReader,
  instrumentations,
});

sdk.start();
