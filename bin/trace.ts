import config from 'config'
import { Resource } from '@opentelemetry/resources'
import { SemanticResourceAttributes } from '@opentelemetry/semantic-conventions'
import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-proto'
import {
  BasicTracerProvider,
  SimpleSpanProcessor,
} from '@opentelemetry/sdk-trace-base'
import { diag, DiagConsoleLogger, DiagLogLevel } from '@opentelemetry/api'

const resource = Resource.default().merge(
  new Resource({
    [SemanticResourceAttributes.SERVICE_NAME]: config.get('app.name'),
    [SemanticResourceAttributes.SERVICE_VERSION]: config.get('app.version'),
  })
)

const exporter = new OTLPTraceExporter()
const provider = new BasicTracerProvider({
  resource: resource,
})

provider.addSpanProcessor(new SimpleSpanProcessor(exporter))

provider.register()

diag.setLogger(new DiagConsoleLogger(), DiagLogLevel.INFO)
